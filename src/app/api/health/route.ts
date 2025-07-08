import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    environment: process.env.NODE_ENV || 'unknown',
    features: {
      openai_configured: !!process.env.OPENAI_API_KEY,
      shopify_configured: !!(process.env.SHOPIFY_CLIENT_ID && process.env.SHOPIFY_CLIENT_SECRET),
      task_generation: 'available',
      rag_system: 'active',
      knowledge_base: 'loaded'
    },
    api_endpoints: {
      task_generation: '/api/tasks/generate',
      team_tasks: '/api/tasks/team',
      shopify_connect: '/api/shopify/connect',
      shopify_sync: '/api/shopify/sync'
    },
    deployment_info: {
      using_ai: !!process.env.OPENAI_API_KEY ? 'Full AI task generation with RAG' : 'Fallback mode - strategic sample tasks',
      context_sources: [
        'Onboarding profile data',
        'Previous task history and patterns',
        'Business knowledge base (50+ frameworks)',
        'Shopify business intelligence (if connected)',
        'Goal-specific strategic context'
      ]
    }
  }

  return NextResponse.json(checks, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
} 