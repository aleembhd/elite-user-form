/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, User, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from './supabaseClient';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDuplicateWarning(false); // Clear any previous warnings
    
    try {
      // Check if ALL THREE fields (name, phone, email) already exist in the database
      const { data: existingData, error: checkError } = await supabase
        .from('registrations')
        .select('name, phone, email')
        .eq('name', formData.name.trim())
        .eq('phone', formData.phone.trim())
        .eq('email', formData.email.trim().toLowerCase());

      // Log for debugging
      console.log('🔍 Checking for duplicates...', { 
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        found: existingData,
        error: checkError 
      });

      // If we found any records with ALL THREE matching fields, it's a duplicate
      if (existingData && existingData.length > 0) {
        console.log('⚠️ Duplicate entry found! All three fields (name, phone, email) match an existing record.');
        setDuplicateWarning(true);
        setIsSubmitting(false);
        return; // Stop here - don't save
      }

      console.log('✅ No duplicate found (all three fields are unique combination), proceeding with save...');

      // Insert data into Supabase 'registrations' table
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      console.log('✅ Successfully saved to Supabase:', data);

      // Trigger webhook (n8n) with the registration data
      try {
        console.log('📤 Sending data to webhook...');
        const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://rafibuildsexp.app.n8n.cloud/webhook/register';
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          }),
        });

        if (webhookResponse.ok) {
          console.log('✅ Webhook triggered successfully');
        } else {
          console.warn('⚠️ Webhook failed but registration saved:', webhookResponse.status);
        }
      } catch (webhookError) {
        // Don't fail the registration if webhook fails
        console.warn('⚠️ Webhook error (registration still saved):', webhookError);
      }

      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
      });
    } catch (error) {
      console.error('❌ Error saving to Supabase:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-hidden selection:bg-brand selection:text-black">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] text-[20vw] font-bold text-white/[0.02] font-display whitespace-nowrap rotate-12 select-none">
          TRAIN HARD • STAY STRONG • NO LIMITS
        </div>
        <div className="absolute bottom-[0%] right-[0%] translate-x-1/2 translate-y-1/2 w-[50vw] h-[50vw] bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-brand/10 border border-brand/20 shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                  <Dumbbell className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h1 className="text-3xl font-display font-bold tracking-tight">ELITE GYM</h1>
                  <p className="text-neutral-400 text-sm tracking-widest uppercase font-medium">Start your fitness journey</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-xl font-medium mb-2">Join ELITE GYM</h2>
                <p className="text-neutral-500">Register your details below to receive the latest gym updates, diet plans, and exclusive offers.</p>
                
                {/* 7-Day Workout Plan Highlight */}
                <div className="mt-4 p-3 bg-brand/5 border border-brand/20 rounded-xl flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-300">
                    Get your <span className="text-brand font-semibold">FREE 7-Day Workout Plan</span> instantly after registration
                  </p>
                </div>
              </motion.div>

              {/* Duplicate Warning Message */}
              {duplicateWarning && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-yellow-500 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-yellow-500 font-bold text-sm mb-1">Already Registered!</h3>
                      <p className="text-yellow-200/80 text-sm">
                        You have already registered with these exact details (name, phone, and email). Please use different information or contact support if you need assistance.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setDuplicateWarning(false)}
                      className="text-yellow-500/60 hover:text-yellow-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants} className="group relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-brand transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-neutral-600"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setDuplicateWarning(false); // Clear warning when user changes any field
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="group relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-brand transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-neutral-600"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setDuplicateWarning(false); // Clear warning when user changes any field
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="group relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-brand transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-neutral-600"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setDuplicateWarning(false); // Clear warning when user changes email
                    }}
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-brand text-black font-bold py-4 rounded-2xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
                >
                  <span className="relative z-10">{isSubmitting ? 'SECURELY SENDING...' : 'GET STARTED NOW'}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </motion.button>
              </form>

              <motion.p variants={itemVariants} className="mt-8 text-center text-xs text-neutral-600 uppercase tracking-widest leading-relaxed">
                We'll only use this information to send you gym updates or diet plans.<br/>
                <span className="text-brand/50">Your data is protected.</span>
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
                  className="p-4 rounded-full bg-brand/20 border border-brand/50 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand" />
                </motion.div>
              </div>
              <h1 className="text-4xl font-display font-bold mb-4">REGISTRATION COMPLETE</h1>
              <p className="text-neutral-400 max-w-xs mx-auto mb-8">
                Welcome to the family. Check your inbox for updates on the latest diet plans and gym news.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-neutral-500 hover:text-brand transition-colors text-sm uppercase tracking-widest font-bold"
              >
                Back to form
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
