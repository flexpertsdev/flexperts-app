# Supabase Setup Guide

## 1. Enable Authentication Providers

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/qapirnafkcoiflnacxhh/auth/providers
2. Enable the following providers:
   - **Email** (should be enabled by default)
   - **Google** (optional)
   - **GitHub** (optional)

### For Google OAuth:
1. Click on Google provider
2. Follow the instructions to set up OAuth in Google Cloud Console
3. Add your redirect URL: `https://qapirnafkcoiflnacxhh.supabase.co/auth/v1/callback`

### For GitHub OAuth:
1. Click on GitHub provider
2. Follow the instructions to create an OAuth App in GitHub
3. Add your redirect URL: `https://qapirnafkcoiflnacxhh.supabase.co/auth/v1/callback`

## 2. Configure Email Templates (Optional)

1. Go to Authentication → Email Templates
2. Customize the confirmation, invite, and reset password emails

## 3. Run Database Schema

1. Go to SQL Editor: https://supabase.com/dashboard/project/qapirnafkcoiflnacxhh/sql/new
2. Copy and paste the contents of `schema.sql`
3. Click "Run" to create all tables and policies

## 4. Configure Redirect URLs

1. Go to Authentication → URL Configuration
2. Add your site URLs to the redirect allowlist:
   - `http://localhost:3000/*`
   - `https://your-netlify-site.netlify.app/*`
   - Your custom domain (if you have one)

## 5. Test Authentication

1. Try signing up with an email address
2. Check your email for the confirmation link
3. Once confirmed, you should be able to log in

## Troubleshooting

### "Failed to load resource" errors
- Make sure your Supabase project is active (not paused)
- Check that authentication is enabled
- Verify your environment variables are correct

### Authentication not working
- Check the redirect URLs are properly configured
- Make sure email confirmation is enabled/disabled as needed
- Check browser console for specific error messages