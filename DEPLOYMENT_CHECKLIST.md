# Deployment Checklist for Ventry Task Generation System

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Configuration
- [ ] **OPENAI_API_KEY** is set in production environment
- [ ] API key is valid and has sufficient credits
- [ ] Environment variables are set for correct environment (Production/Preview)

### 2. Build Verification
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] No ESLint warnings for critical issues

### 3. API Endpoints Testing
- [ ] `/api/tasks/generate` responds correctly
- [ ] `/api/tasks/team` functions properly
- [ ] `/api/health` shows correct configuration status

## 🚀 Post-Deployment Verification

### 1. Health Check
Visit: `https://your-domain.com/api/health`

**Expected Response when properly configured:**
```json
{
  "status": "healthy",
  "features": {
    "openai_configured": true,
    "task_generation": "available",
    "rag_system": "active"
  },
  "deployment_info": {
    "using_ai": "Full AI task generation with RAG"
  }
}
```

**If OpenAI not configured, you'll see:**
```json
{
  "deployment_info": {
    "using_ai": "Fallback mode - strategic sample tasks"
  }
}
```

### 2. Task Generation Testing
1. **Navigate to deployed dashboard**
2. **Add at least one business goal**
3. **Click "Generate Daily Tasks"**
4. **Verify task quality:**
   - Tasks should be specific and actionable
   - Should reference your goals
   - Should include business impact metrics
   - Should NOT be generic/repetitive

### 3. Context Integration Verification
**With AI enabled, tasks should:**
- [ ] Reference specific business goals you entered
- [ ] Build on previous task history (if any)
- [ ] Include strategic reasoning
- [ ] Have varied priorities and approaches
- [ ] Include specific time estimates and success criteria

**With Shopify connected:**
- [ ] Tasks should reference business intelligence from store data
- [ ] Include specific inventory, sales, or customer insights
- [ ] Address urgent alerts if any exist

## 🛠 Platform-Specific Instructions

### Vercel Deployment
1. **Set Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add `OPENAI_API_KEY` with your API key
   - Ensure it's enabled for "Production" environment

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Verify:**
   ```bash
   curl https://your-domain.vercel.app/api/health
   ```

### Netlify Deployment
1. **Set Environment Variables:**
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add `OPENAI_API_KEY`

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Railway/Render/Other Platforms
1. **Set Environment Variables in platform dashboard**
2. **Ensure `OPENAI_API_KEY` is available at runtime**

## 🔍 Troubleshooting

### Issue: Tasks appear generic/repetitive
**Cause:** OpenAI API key not configured
**Solution:** Set `OPENAI_API_KEY` environment variable

### Issue: Tasks don't reference user goals
**Cause:** Goals not passed to API or context not working
**Solution:** Check console logs for errors, verify API requests

### Issue: No Shopify integration
**Expected:** Shopify integration is optional - system works without it

### Issue: Build fails
**Check:** 
- All dependencies installed
- TypeScript compilation succeeds
- Environment variables syntax correct

## 📊 Expected Performance Metrics

### With Full AI System:
- **Task Relevance:** 95%+ alignment with user goals
- **Task Quality:** Specific, actionable, with clear success criteria
- **Context Usage:** References previous tasks, onboarding data, knowledge base
- **Business Impact:** Each task includes measurable business outcomes

### With Fallback System:
- **Task Quality:** Still high-quality strategic tasks
- **Limitation:** Not personalized to specific user context
- **Use Case:** Good for testing UI/UX without API costs

## ✅ Final Verification Steps

1. **Health Check:** `/api/health` shows `openai_configured: true`
2. **Task Generation:** Creates personalized, context-aware tasks
3. **Console Logs:** No warnings about fallback mode
4. **User Experience:** Tasks feel intelligent and relevant
5. **Business Impact:** Each task includes specific metrics and outcomes

---

**🎯 Success Criteria:** When properly deployed, the system should generate intelligent, context-aware tasks that reference user goals, business data, and strategic frameworks - not generic placeholder content. 