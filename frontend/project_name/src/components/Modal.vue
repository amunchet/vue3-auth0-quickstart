<template>
  <div class="modal fade" :id="id" tabindex="-1" ref="modal" aria-hidden="true">
    <div class="modal-dialog" :class="size">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            Default body content. Please provide your own via the "body" slot.
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
// Props for the modal
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Modal Title",
  },
  size: {
    type: String,
    default: "modal-md", // Bootstrap sizes like 'modal-sm', 'modal-lg', etc.
  },
});

// Reference for the modal DOM element
const modal = ref(null);

// Function to open the modal
const openModal = () => {
  const modalInstance = new bootstrap.Modal(modal.value);
  modalInstance.show();
};

// Function to close the modal
const closeModal = () => {
  const modalInstance = bootstrap.Modal.getInstance(modal.value);
  modalInstance.hide();
};

// Expose functions to parent components
defineExpose({ openModal, closeModal });
</script>
