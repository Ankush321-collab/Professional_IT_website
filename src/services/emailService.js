import emailjs from '@emailjs/browser';

// EmailJS configuration - Your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_ir071mq'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_tarujkf'; // Your Template ID (for admin notification)
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_g8kd13s'; // You need to create this template
const EMAILJS_PUBLIC_KEY = '5zlq5Pq3ZMlJ0rbgr'; // Your Public Key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEnquiryEmail = async (formData) => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Missing required form data');
    }

    // Template parameters for admin notification
    const adminTemplateParams = {
      to_email: 'ankushadhikari321@gmail.com', // Recipient email address
      from_name: formData.name,
      from_email: formData.email,
      customer_phone: formData.phone || 'Not provided',
      service_type: formData.service || 'General Inquiry',
      message: formData.message,
      enquiry_date: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      reply_to: formData.email,
      to_name: 'Computer Poin Nepal Team',
      // Additional fallback parameters
      customer_name: formData.name,
      customer_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'General Inquiry'
    };

    console.log('Sending admin notification email...');
    console.log('Template parameters:', adminTemplateParams);
    
    // Send admin notification email
    const adminResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      adminTemplateParams
    );

    console.log('Admin email sent successfully:', adminResponse);

    // Try to send auto-reply email to customer (optional - don't fail if template doesn't exist)
    try {
      console.log('Attempting to send auto-reply email to customer...');
      
      const autoReplyTemplateParams = {
        to_email: formData.email,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone || 'Not provided',
        service_type: formData.service || 'General Inquiry',
        customer_message: formData.message,
        enquiry_date: new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kathmandu',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        company_name: 'Computer Poin Nepal',
        company_email: 'info@computerpoinnepal.com',
        company_phone: '+977-1-4784560'
      };

      const autoReplyResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        autoReplyTemplateParams
      );

      console.log('Auto-reply email sent successfully:', autoReplyResponse);

      return { 
        success: true, 
        adminResponse,
        autoReplyResponse,
        message: 'Enquiry sent successfully! You should receive a confirmation email shortly.' 
      };
    } catch (autoReplyError) {
      console.warn('Auto-reply email failed (this is optional):', autoReplyError);
      
      // Still return success if admin email was sent
      return { 
        success: true, 
        adminResponse,
        autoReplyResponse: null,
        message: 'Enquiry sent successfully! Our team will contact you soon.' 
      };
    }

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    
    if (error.status === 422) {
      if (error.text && error.text.includes('recipients address is empty')) {
        errorMessage = 'Email template configuration error: The recipient address is not properly configured in your EmailJS template. Please ensure the "To" field in your EmailJS template is set to {{to_email}}.';
      } else {
        errorMessage = 'Email template configuration error. Please check that all template variables are properly set in your EmailJS dashboard.';
      }
    } else if (error.status === 400) {
      errorMessage = 'Invalid email data provided.';
    } else if (error.status === 401) {
      errorMessage = 'Email service authentication failed. Please check your EmailJS configuration.';
    } else if (error.status === 404) {
      errorMessage = 'Email template not found. Please check your template ID in EmailJS dashboard.';
    } else if (error.text && error.text.includes('template')) {
      errorMessage = 'Email template not found or misconfigured.';
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: error.text || error.message,
      status: error.status 
    };
  }
};

// Demo function for testing (not used in production)
export const sendEnquiryEmailDemo = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Demo: Admin notification email would be sent with:');
      console.log({
        to: 'ankushadhikari321@gmail.com',
        from: formData.email,
        subject: `New Enquiry from ${formData.name}`,
        data: formData,
        timestamp: new Date().toLocaleString()
      });
      
      console.log('Demo: Auto-reply email would be sent to:', formData.email);
      
      resolve({ success: true });
    }, 1000);
  });
};