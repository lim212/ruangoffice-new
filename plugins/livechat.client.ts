export default defineNuxtPlugin(() => {
  if (process.server) return
  const w = window as any
  if (w.__n8nChatLoaded) return
  w.__n8nChatLoaded = true

  // Inject stylesheet once
  const styleId = 'n8n-chat-style'
  if (!document.getElementById(styleId)) {
    const link = document.createElement('link')
    link.id = styleId
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
    document.head.appendChild(link)
  }

  // Inject module script that imports createChat and initializes it
  const scriptId = 'n8n-chat-init'
  if (!document.getElementById(scriptId)) {
    const s = document.createElement('script')
    s.id = scriptId
    s.type = 'module'
    s.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      try {
        createChat({
          webhookUrl: 'https://n8n-4u1spji0.n8x.biz.id/webhook/b66a3a03-55da-493f-ab6c-648f91ca60e8/chat',
          initialMessages: ['Hallo, nama saya Felix. ada yang bisa saya bantu?'],
          defaultLanguage: 'id',
          i18n: {
            en: {
              title: 'RuangOffice.com',
              subtitle: "Start a chat. We're here to help you 24/7.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..'
            },
            id: {
              title: 'RuangOffice.com',
              subtitle: 'chat disini, akan kami bantu 24/7.',
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..'
            }
          }
        });
      } catch (e) {
        console && console.warn && console.warn('Livechat init failed:', e)
      }
    `
    document.head.appendChild(s)
  }
})
