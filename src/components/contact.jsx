// components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="padding-section bg-light" data-aos="fade-up">
      <div className="container py-5">
        {/* Unified Header Design - Exactly same as About/Skills/Projects */}
        <div className="mb-5">
          <span className="text-primary fw-bold text-uppercase tracking-wider">| 04. CONNECTION</span>
          <h2 className="display-5 fw-bold mt-2">Get In Touch</h2>
          <div className="bg-primary mt-2" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-12">
            <p className="lead text-muted mb-5" style={{ maxWidth: '700px' }}>
              ကျွန်တော်ဟာ လက်ရှိမှာ အလုပ်အကိုင် အခွင့်အလမ်းသစ်တွေနဲ့ ပူးပေါင်းဆောင်ရွက်မှုတွေကို ဖိတ်ခေါ်နေပါတယ်။
              သိလိုတာများရှိလို့ဖြစ်စေ၊ နှုတ်ဆက်ချင်လို့ဖြစ်စေ ဘယ်အချိန်မဆို ဆက်သွယ်နိုင်ပါတယ်ဗျာ။ ကျွန်တော့်ဘက်က အမြန်ဆုံး ပြန်လည်အကြောင်းပြန်ပေးပါ့မယ်။
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="row g-4">
            {/* Email Card */}
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <a href="mailto:yourname@email.com" className="text-decoration-none">
                <div className="p-4 bg-white shadow-sm rounded-4 border-bottom border-danger border-3 contact-card h-100">
                  <i className='bi bi-envelope h1 text-danger'></i>
                  <h6 className="fw-bold text-dark mt-3">Email</h6>
                  <p className="small text-muted mb-0">htoo31772@email.com</p>
                </div>
              </a>
            </div>

            {/* Phone/Viber Card */}
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <a href="tel:+959xxxxxxx" className="text-decoration-none">
                <div className="p-4 bg-white shadow-sm rounded-4 border-bottom border-primary border-3 contact-card h-100">
                  <i className='bi bi-phone h1 text-purple'></i>
                  <h6 className="fw-bold text-dark mt-3">Phone / Viber</h6>
                  <p className="small text-muted mb-0">+95 09 770200436</p>
                </div>
              </a>
            </div>

            {/* Telegram Card */}
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
              <a href="https://t.me/yourusername" className="text-decoration-none">
                <div className="p-4 bg-white shadow-sm rounded-4 border-bottom border-info border-3 contact-card h-100">
                  <i className='bi bi-telegram h1 text-info'></i>
                  <h6 className="fw-bold text-dark mt-3">Telegram</h6>
                  <p className="small text-muted mb-0">@maungmaunghtoo</p>
                </div>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
              <a href="https://facebook.com/yourprofile" className="text-decoration-none">
                <div className="p-4 bg-white shadow-sm rounded-4 border-bottom border-primary border-3 contact-card h-100">
                  <i className='bi bi-facebook h1 text-primary'></i>
                  <h6 className="fw-bold text-dark mt-3">Facebook</h6>
                  <p className="small text-muted mb-0">Maung Maung Htoo</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 pt-5 border-top text-center text-md-start">
          <p className="small text-secondary mb-0">
            © 2026 Designed & Built by <a href="" className='text-primary text-decoration-none'>Maung Maung Htoo</a> | Full-stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;