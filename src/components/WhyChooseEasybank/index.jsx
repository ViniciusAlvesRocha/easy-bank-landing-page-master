import React from 'react';
import IconImage from '../../images/icon-online.svg';
import IconBudgeting from '../../images/icon-budgeting.svg';
import IconFastOnboarding from '../../images/icon-onboarding.svg';
import IconOpenAPI from '../../images/icon-api.svg';
import './why-style-mobile.css';
import './why-style-desktop.css';

const WhyChooseEasybank = () => (
  <section className="why-choose-easybank">
    <h2 className="h2-style-default">Why choose Easybank?</h2>
    <p className="p-text-style-default p-main-text-desktop">
      We leverage Open Banking to turn your bank account into your financial hub. Control
      your finances like never before.
    </p>

    <div className="reasons">
      <div className="reason-online-banking">
        <img className="img-reason" src={ IconImage } alt="bank online" />
        <h3 class="h3-text">Online Banking</h3>
        <p className="p-text-style-default p-text-card-desktop">
          Our modern web and mobile applications allow you to keep track of your finances 
          wherever you are in the world.
        </p>
      </div>

      <div className="reason-simple-budgeting">
        <img className="img-reason" src={ IconBudgeting } alt="icon budgeting" />
        <h3 class="h3-text">Online Banking</h3>
        <p className="p-text-style-default p-text-card-desktop">
          Our modern web and mobile applications allow you to keep track of your finances 
          wherever you are in the world.
        </p>
      </div>

      <div className="reason-fast-onboarding">
        <img className="img-reason" src={ IconFastOnboarding } alt="icon fast onboarding" />
        <h3 class="h3-text">Fast Onboarding</h3>
        <p className="p-text-style-default p-text-card-desktop">
          We don’t do branches. Open your account in minutes online and start taking control 
          of your finances right away.
        </p>
      </div>

      <div className="reason-open-api">
        <img className="img-reason" src={ IconOpenAPI } alt="icon open API" />
        <h3 class="h3-text">Open API</h3>
        <p className="p-text-style-default p-text-card-desktop">
          Manage your savings, investments, pension, and much more from one account. Tracking 
          your money has never been easier.
        </p>
      </div>
    </div>

  </section>
);

export default WhyChooseEasybank;