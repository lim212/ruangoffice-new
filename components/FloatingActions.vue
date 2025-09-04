<template>
  <div class="fixed right-4 sm:right-6 z-50">
    <!-- WhatsApp Button - Fixed Position -->
    <div class="mb-3">
      <a 
        :href="`https://wa.me/${waPhone}?text=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
        target="_blank" 
        rel="noopener"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-2xl hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-110 transition-all duration-300 hover:shadow-emerald-500/50 border border-emerald-400/50"
        :aria-label="`Chat WhatsApp dengan ${waPhone}`"
        style="bottom: 140px;"
      >
        <span class="text-xl sm:text-2xl">💬</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat WhatsApp
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </a>
    </div>

    <!-- Phone Button - Fixed Position -->
    <div class="mb-3">
      <a 
        :href="`tel:${waPhone}`"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50 border border-blue-400/50"
        :aria-label="`Telepon ke ${waPhone}`"
        style="bottom: 210px;"
      >
        <span class="text-xl sm:text-2xl">📞</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Telepon Sekarang
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </a>
    </div>

    <!-- Email Button - Fixed Position -->
    <div class="mb-3">
      <a 
        :href="`mailto:${email}?subject=Konsultasi Layanan RuangOffice&body=Halo, saya ingin konsultasi tentang layanan RuangOffice`"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50 border border-purple-400/50"
        :aria-label="`Kirim email ke ${email}`"
        style="bottom: 280px;"
      >
        <span class="text-xl sm:text-2xl">📧</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Kirim Email
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </a>
    </div>

    <!-- Scroll to Top Button - Fixed Position -->
    <div class="mb-3">
      <button 
        @click="scrollToTop"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-2xl hover:from-indigo-600 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 hover:shadow-indigo-500/50 border border-indigo-400/50"
        aria-label="Scroll ke atas"
        style="bottom: 350px;"
      >
        <span class="text-xl sm:text-2xl">⬆️</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Scroll ke Atas
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </button>
    </div>

    <!-- Scroll to Bottom Button - Fixed Position -->
    <div class="mb-3">
      <button 
        @click="scrollToBottom"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full shadow-2xl hover:from-teal-600 hover:to-teal-700 transform hover:scale-110 transition-all duration-300 hover:shadow-teal-500/50 border border-teal-400/50"
        aria-label="Scroll ke bawah"
        style="bottom: 420px;"
      >
        <span class="text-xl sm:text-2xl">⬇️</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Scroll ke Bawah
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </button>
    </div>

    <!-- Main Contact Button - Fixed Position (Bottom) -->
    <div>
      <button 
        @click="toggleQuickForm"
        class="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:from-amber-600 hover:to-amber-700 transform hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 border border-amber-400/50"
        :aria-label="showQuickForm ? 'Tutup form cepat' : 'Buka form cepat'"
        style="bottom: 20px;"
      >
        <span class="text-xl sm:text-2xl">📝</span>
        
        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Form Cepat
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </button>
    </div>

    <!-- Quick Contact Form Modal -->
    <div 
      v-if="showQuickForm"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click="closeQuickForm"
    >
      <div 
        class="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 mx-4"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">📝</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Konsultasi Cepat</h3>
              <p class="text-amber-100 text-sm">Isi form untuk konsultasi langsung</p>
            </div>
          </div>
          <button 
            @click="closeQuickForm"
            class="text-white hover:text-amber-200 text-2xl transition-colors duration-200 bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <!-- Modal Content -->
        <div class="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div class="p-6">
            <form @submit.prevent="submitQuickForm" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  v-model="quickForm.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                <input 
                  v-model="quickForm.phone"
                  type="tel" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                  placeholder="0811113666"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Layanan yang Diminati</label>
                <select 
                  v-model="quickForm.service"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                >
                  <option value="">Pilih layanan</option>
                  <option value="pendirian-pt">Pendirian PT</option>
                  <option value="pendirian-cv">Pendirian CV</option>
                  <option value="virtual-office">Virtual Office</option>
                  <option value="private-office">Private Office</option>
                  <option value="perizinan">Perizinan Usaha</option>
                  <option value="konsultan">Jasa Konsultan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea 
                  v-model="quickForm.message"
                  rows="3"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200 resize-none"
                  placeholder="Jelaskan kebutuhan Anda secara singkat"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <span class="animate-spin mr-2">⏳</span>
                  Mengirim...
                </span>
                <span v-else class="flex items-center justify-center">
                  <span class="mr-2">🚀</span>
                  Kirim Permintaan
                </span>
              </button>
            </form>
            
            <!-- Success Message -->
            <div 
              v-if="showSuccessMessage"
              class="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-sm"
            >
              ✅ Permintaan berhasil dikirim! Tim kami akan segera menghubungi Anda.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const waPhone = '0811113666';
const email = 'Legal@RuangOffice.com';

const showQuickForm = ref(false);
const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

const quickForm = ref({
  name: '',
  phone: '',
  service: '',
  message: ''
});

const toggleQuickForm = () => {
  showQuickForm.value = !showQuickForm.value;
  if (!showQuickForm.value) {
    showSuccessMessage.value = false;
    resetForm();
  }
};

const closeQuickForm = () => {
  showQuickForm.value = false;
  showSuccessMessage.value = false;
  resetForm();
};

const resetForm = () => {
  quickForm.value = {
    name: '',
    phone: '',
    service: '',
    message: ''
  };
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
};

const submitQuickForm = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    showSuccessMessage.value = true;
    
    // Auto-hide form after 3 seconds
    setTimeout(() => {
      closeQuickForm();
    }, 3000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Close form on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showQuickForm.value = false;
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>