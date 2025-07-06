# Computer Poin Nepal - Professional Website

A modern, responsive website for Computer Poin Nepal built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Optimized for mobile, tablet, and desktop devices
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **Email Notifications**: Contact form with email notification system
- **Professional Sections**: Home, About, Services, Gallery, and Contact pages

## Email Notification Setup

The website includes an email notification feature that sends enquiries directly to your email. To set this up:

### Option 1: EmailJS (Recommended for Frontend-only)

1. **Create an EmailJS Account**:
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up Email Service**:
   - Add an email service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create Email Template**:
   - Create a new email template with these variables:
     - **CRITICAL**: Set the "To" field to `{{to_email}}` (this is essential!)
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{customer_phone}}` or `{{phone}}` - Phone number
     - `{{service_type}}` or `{{service}}` - Service of interest
     - `{{message}}` - Message content
     - `{{enquiry_date}}` - Date and time
   - Note down your Template ID

4. **Get Public Key**:
   - Go to Account settings and copy your Public Key

5. **Update Configuration**:
   - Open `src/services/emailService.js`
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_template_id';
     const EMAILJS_PUBLIC_KEY = 'your_public_key';
     ```

6. **Template Configuration Requirements**:
   - **MOST IMPORTANT**: The "To" field in your EmailJS template MUST be set to `{{to_email}}`
   - This ensures the recipient email address (ankushadhikari321@gmail.com) is properly used
   - All other template variables should match the ones sent from the application

### Email Template Example

**Template Settings:**
- **To**: `{{to_email}}` (REQUIRED - this must be exactly `{{to_email}}`)
- **From**: Your email service (configured in EmailJS)
- **Subject**: `New Enquiry from {{from_name}} - Computer Poin Nepal`

**Body:**
```
You have received a new enquiry from your website!

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{customer_phone}}
- Service Interest: {{service_type}}
- Enquiry Date: {{enquiry_date}}

Message:
{{message}}

---
This enquiry was sent from the Computer Poin Nepal website contact form.
```

### Auto-Reply Template (Optional)

Create a second template for customer auto-replies:
- **Template ID**: Update `EMAILJS_AUTO_REPLY_TEMPLATE_ID` in the code
- **To**: `{{to_email}}` (customer's email)
- **Subject**: `Thank you for contacting Computer Poin Nepal`

## Troubleshooting Email Issues

### Common Error: "The recipients address is empty"

This error occurs when the EmailJS template is not properly configured. To fix:

1. **Check Template Configuration**:
   - Log into your EmailJS dashboard
   - Go to Email Templates
   - Select your template (ID: `template_tarujkf`)
   - Ensure the "To" field is set to exactly: `{{to_email}}`

2. **Verify Template Variables**:
   - Make sure all variables in your template match those sent from the application
   - Required variables: `to_email`, `from_name`, `from_email`, `message`
   - Optional variables: `customer_phone`, `service_type`, `enquiry_date`

3. **Test Configuration**:
   - Use the EmailJS dashboard test feature
   - Send a test email with sample data
   - Verify the recipient receives the email

## Current Configuration

- **Recipient Email**: ankushadhikari321@gmail.com
- **Service ID**: service_ir071mq
- **Template ID**: template_tarujkf
- **Auto-Reply Template ID**: template_g8kd13s (optional)
- **Required Fields**: Name, Email, Phone, Message

## Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Styling and responsive design
- **Framer Motion**: Animations and transitions
- **React Router**: Navigation
- **EmailJS**: Email notification service
- **Heroicons**: Icon library

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable components
├── data/               # Static data files
├── pages/              # Page components
├── services/           # Email service configuration
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Customization

- **Colors**: Update `tailwind.config.js` for color scheme changes
- **Content**: Modify data files in `src/data/` directory
- **Email**: Update recipient email in `src/services/emailService.js`
- **Images**: Replace stock photos with your own images

## Support

For any issues or questions, please contact the development team.