// components/About.jsx
import React from 'react';
import myImage from '../assets/images/myImage.jpg';
const About = () => {
  return (
    <section id="about" className="py-5 bg-white" data-aos="fade-up">
      <div className="container py-5">
        {/* Header Design with Vertical Bar & Label */}
        <div className="mb-5">
          <span className="text-primary fw-bold text-uppercase tracking-wider">| ABOUT ME: THE JOURNEY</span>
          <div className="bg-primary mt-2" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row g-5 align-items-center">
          {/* Left Column: Image Area (As per Page 5) */}
          <div className="col-lg-5 text-center" data-aos="zoom-in">
            <div className="image-container shadow-lg rounded-circle overflow-hidden mx-auto"
              style={{ width: '350px', height: '350px', border: '8px solid #f8f9fa' }}>
              <img
                src={myImage}
                alt="Developer Profile"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* Right Column: Educational Background */}
          <div className="col-lg-7" data-aos="fade-left">
            <h3 className="fw-bold mb-4">Educational Background</h3>
            <div className="education-list">

              {/* The Navigator */}
              <div className="d-flex mb-4" data-aos="fade-left" data-aos-delay="100">
                <div className="me-3 text-primary h4"><i className="bi bi-filetype-html"></i></div>
                <p className="text-muted">
                  <strong>The Navigator</strong> မှာ IT အခြေခံသဘောတရားများကို စနစ်တကျ သင်ယူခဲ့ပြီး၊ Programming Logic နှင့် System ပိုင်းဆိုင်ရာ အခြေခံကောင်းများကို တည်ဆောက်ခဲ့ပါတယ်။
                </p>
              </div>

              {/* MM Coder */}
              <div className="d-flex mb-4" data-aos="fade-left" data-aos-delay="200">
                <div className="me-3 text-info h4"><i className="bi bi-braces-asterisk"></i></div>
                <p className="text-muted">
                  <strong>MM Coder</strong> မှာ <strong>React.js</strong> ကို အထူးပြုလေ့လာခဲ့ပြီး၊ ခေတ်မီ Component-based Architecture နှင့် State Management ပိုင်းကို ကျွမ်းကျင်စွာ အသုံးချနိုင်ခဲ့ပါတယ်။
                </p>
              </div>

              {/* Laravel Focus */}
              <div className="d-flex" data-aos="fade-left" data-aos-delay="300">
                <div className="me-3 text-danger h4"><i className="bi bi-database-check"></i></div>
                <p className="text-muted">
                  <strong>Laravel Full-stack</strong> ပိုင်းကို အဓိကထား လုပ်ဆောင်ခဲ့ပြီး၊ လှပသပ်ရပ်သော Frontend နှင့် ခိုင်မာတောင့်တင်းသော Backend ပိုင်းတို့ကို ကောင်းမွန်စွာ ပေါင်းစပ်တည်ဆောက်နိုင်ပါတယ်။
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;