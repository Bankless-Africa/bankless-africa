import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/Nav/Navbar'
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Policy = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div>
        <Head>
            <title>Bankless Africa privacy policy</title>
            <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar component="home" />
      <main className="py-4 mx-5 lg:mx-14 xl:mx-24">
        <h1 className="font-black text-2xl mb-3">Privacy Policy</h1>
        <div className="mt-3">
            <h3 className="font-bold text-xl">Effective date: August 2022</h3>
            <p>
            This privacy policy describes how Bankless Africa collects, uses and stores personal information 
            of users on this website, <Link href="/"><a className="underline text-blue-400"><strong>https://www.banklessafrica.com</strong></a></Link>. This Policy applies to the Site, products 
            and services (collectively, Services) on or in which it is posted, linked, or referenced.
            By using our Services, you accept the terms of this Privacy Policy and that you consent to the collection,
            use, disclosure, and retention of your information as described in this Privacy Policy. 
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            DO NOT USE OUR SERVICES IF YOU DO NOT WITH OR ANY SECTION OF THIS PRIVACY POLICY 
            </h3>
            <p>
            Be informed that this Privacy Policy shall not be applicable to datas received through any Third 
            Party Websites and or Services that you access through the Services or that you submit to us 
            through email, text message or other electronic message or offline.
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            The data we collect 
            </h3>
            <p>
                <p className="mb-1">
                When you use our platform, We collect certain data from you directly, 
                like information you provide to us, the data we collect includes:
                </p>
                <p className="mb-1">
                Your Personal Details such as your email address.
                </p>
                <p className="mb-1">
                Feedback and correspondence, such as the information you provide in your responses to surveys, when you participate in market research activities, report a problem with Service, receive customer support or otherwise correspond with us;
                </p>
                <p className="mb-1">
                Usage information, such as information about how you use the Service and interact with us;
                </p>
                <p className="mb-1">
                Technical information, such as your Ethereum wallet address;
                </p>
                <p className="mb-1">
                Marketing information, such as your preferences for receiving marketing communications and details about how you engage with them.
                </p>
                <p className="mb-1">
                Information We Get From Other Sources: We may get information about you from other third party platforms and we may add this to the information we get from your use of our Platform.
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Data We Collect through Automated Means
            </h3>
            <p>
                <p className="mb-1">
                When you access our platform, we collect certain data by automated means, including but not limited to:
                </p>
                <p className="mb-1">
                System Data may include information such as your IP Address, device and browser type, operating 
                system, the pages of our website that you visited and the duration or time you have spent in the specific 
                pages, your search queries, click data, date and time, referrer, and other data regarding your use of our platform. We usually use the information that we collect to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences.
                </p>
                <p className="mb-1">
                When you use our platform, we may decide to use cookies or web beacons or other  technologies in order to track how our user
                s use our platform. Some of these tools permits you to opt out of data collection on our platform.
                </p>
                <p className="mb-1">
                In order to optimize the experience of our users when our platform is being used, we use Google Analytics. In order to find 
                more details on Google Analytics, Please click on <a className="underline text-blue-400" href="https://www.google.com/analytics/terms/us.html"><strong>https://www.google.com/analytics/terms/us.html</strong></a>
                </p>
                <p className="mb-1">
                Please be informed that we will never request that you submit the seed phrase of your wallet on our platform.
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Use of Personal Information
            </h3>
            <p>
                <p className="mb-1">
                We try as much as possible to allow you have a good experience when you use our platform. When you use out Platform, We will use your personal information in the following ways: <br />
                To give you accessibility to the use of our Platform. <br />
                To provide and deliver products and services that you may request. <br />
                To send information, including confirmations, technical notices, updates, security alerts, and support and administrative messages.
                </p>
                <p className="mb-1">
                Complying with an existing Legislation.<br />
                We use your personal information as we believe necessary or appropriate to comply with 
                applicable laws, lawful requests and legal process, such as to respond to subpoenas or 
                requests from government authorities.
                </p>
                <p className="mb-1">
                Communication<br />
                We may use your personal data so as to communicate with you about promotions, newsletters, 
                airdrops, upcoming events and any other information about Bankless Aftica, Our Products or 
                Services and out Partners. 
                </p>
                <p className="mb-1">
                Optimisation of Our Platform <br />
                For the purpose of optimising our the experience of our users whenever they use out platform, when may choose to use your personal data to improve our services.
                We may also use your information to respond to your comments and inquiries about the services that we render to our users
                </p>
                <p className="mb-1">
                With your consent <br />
                We may use or share your personal information with your consent, such as when you consent to 
                let us post your testimonials or endorsements on our Site, you instruct us to take a specific action with respect to your personal information, or you opt into third party marketing communications.
                </p>
                <p className="mb-1">
                For compliance, fraud prevention, and safety <br />
                We may use your personal data to protect, conduct investigation, and deter against fraudulent, 
                unauthorized, or illegal activity.
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            SHARING OF YOUR PERSONAL DATA
            </h3>
            <p>
                <p className="mb-1">
                Except you give us the requisite Express Consent, Bankless Africa will never share the personal data you provide to other organisations when you use our platform.
                </p>
                <p className="mb-1">
                Bankless Africa will disclose personal information to third parties under the following circumstances:
                </p>
                <p className="mb-1">
                We may disclose your personal information to our subsidiaries and or corporate affiliates for purposes consistent with this Privacy Policy.
                </p>
                <p className="mb-1">
                When we do a business deal, or negotiate a business deal, involving the sale or transfer of all 
                or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding.
                </p>
                <p className="mb-1">
                Compliance with Laws and Law Enforcement; Protection and Safety. We may share personal information for legal compliance, protection, and safety purposes.
                </p>
                <p className="mb-1">
                To protect the rights and property of the Company, our agents, customers, and others. This includes enforcing our agreements and policies.
                </p>
                <p className="mb-1">
                We may share information in cases of emergencies. This includes protecting the safety of our Contributors or employees or agents, or our customers, or any person.
                </p>
                <p className="mb-1">
                We may share data with those who we engage to do work for us. These recipients may include third party companies and individuals were engaged by us to administer and provide the Service on our behalf (such as customer support, hosting, email delivery and database management services), as well as lawyers, bankers, and insurers, Forensic Auditors, Accountants.
                </p>
                <p className="mb-1">
                You may permit us to share your personal data with other companies or entities. Then, you will be subject to the privacy policies of such recipient entity or entities.
                </p>
                <p className="mb-1">
                We may also share aggregated and/or anonymized data with others for their own uses.
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            How we Secure your Personal Data
            </h3>
            <p>
                <p className="mb-1">
                We retain the data we collect as long as it is necessary and relevant to fulfill the purposes outlined in this privacy policy. In addition, we retain personal information to comply with applicable legislation where required, prevent fraud, resolve disputes,
                troubleshoot problems, assist with any investigation and other actions permitted by law. 
                </p>
                <p className="mb-1">
                To determine the appropriate retention period for personal information, we consider the amount, 
                nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements.
                </p>
                <p className="mb-1">
                In some circumstances we may anonymize your personal information (so that it can no longer be associated with you) in which case we may use this information indefinitely without further notice to you.
                </p>
                <p className="mb-1">
                We employ industry standard security measures designed to protect the security of all information
                submitted through our Platform. However, the security of information transmitted through the 
                internet can never be guaranteed. We are not responsible for any interception or interruption 
                of any communications through the internet or for changes to or losses of data. When you make use of our platform, you are responsible for maintaining the security of any password, biometrics, user ID or other form of authentication involved in obtaining access to password protected or secure areas of any of our digital services. In order to protect you and your data, we may suspend your use of our platform, without notice, pending an investigation, if any breach of security is suspected.
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Your Choices and Changes on Datas
            </h3>
            <p>
                <p className="mb-1">
                Accessing, Updating, Correcting, and Deleting your data <br />
                Every User of our Platform may access data that was voluntarily provided whenever they use our platform. Users can also review, correct or delete their requisite data on our platform if such data exist. This can be done when such user send us a request via 
                &nbsp;<a className="underline text-blue-400" href="mailto:contact@banklessafrica.com"><strong>contact@banklessafrica.com</strong></a>. 
                </p>
                <p className="mb-1">
                Users may decide to request the changing of contact choices or even opt-out of our sharing with others, and update their personal data and preferences.
                <span className="block mt-1">
                Tracking Technologies Generally <br />
                Regular cookies may generally be disabled or removed by tools available as part of most commercial browsers, and in some instances blocked in the future by selecting certain settings. 
                </span>
                <span className="mt-1">
                <strong>Contact Us</strong> <br />
                We welcome the suggestions of our users on this Policy, and you may contact us at: <a className="underline text-blue-400" href="mailto:contact@banklessafrica.com"><strong>contact@banklessafrica.com</strong></a>
                </span>
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Modifications to This Privacy Policy
            </h3>
            <p>
            We may change or update this privacy policy at anytime. 
            In the event that we update our Privacy Policy, we will change the last updated or effective date as stated 
            in this privacy policy. We will also include a summary of the key changes. Unless stated otherwise, modifications will become effective on the day they are posted. Nevertheless, your continue use of our platform after the requisite modification of our Privacy Policy depicts that you have accepted all the terms stated therein. It also means that the Modif Privacy Policy supercedes all prior Privacy Policies published in the Privacy Policy Section of our Platform.
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            COOKIES POLICY
            </h3>
            <p>
            We understand that your privacy is important to you and are committed to being transparent about the technologies we use. Our Cookie policy highlights the detailed information 
            about how and when we use cookies on our Platform.
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Do we use Cookies?
            </h3>
            <p>
            We and our marketing partners, affiliates, and analytics or service providers use cookies, web beacons, or pixels and other technologies to ensure everyone who uses the Site has the best possible experience.
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            What is a Cookie?
            </h3>
            <p>
            Cookies are small files of information that a web server generates and sends to a web browser. Web browsers store the cookies they receive for a predetermined period of time, or for the length of a user's session on a website. They attach the relevant cookies to any future requests the user makes of the web server. Some of the cookies will only be used if you use certain features or select certain preferences, and some cookies
            will always be used. You can find out more about each cookie by viewing our current cookie list below. 
            We update this list periodically, so there may be additional cookies that are not yet listed. Web beacons, tags and scripts may be used in the Site or in emails to help us to deliver cookies, count visits, understand usage and campaign effectiveness and determine whether an email has been opened and acted upon. We may receive reports based on the use of these technologies by our service/analytics providers on an individual and aggregated basis.
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Why do we use Cookies?
            </h3>
            <p>
                <p className="mb-1">
                We generally use Cookies for the following purposes:
                </p>
                <p className="mb-1">
                To recognize new or past customers. <br />
                To improve our Site and to better understand your visits on our platforms. <br />
                To serve you with interest-based or targeted advertising. <br />
                To observe your behaviors and browsing activities over time across multiple websites or other platforms.
                <br />
                To better understand the interests of our customers and our website visitors
                </p>
                <p className="mb-1">
                Some Cookies are necessary for certain uses of the Site, and without such Cookies, we 
                would not be able to provide many services that you need to properly use the Site. These Cookies, for example, allow us to operate our platform so you may access it as you have requested. They also include Cookies that enable us to remember your previous actions within the same browsing session and secure our Sites.
                </p>
                <p className="mb-1">
                We also use functional Cookies and Cookies from third parties for analysis and marketing purposes.</p>
                <p className="mb-1">
                Functional Cookies enable certain parts of the site to work properly and your user preferences to remain known. Analysis Cookies, among other things, collect information on how visitors use our Site, the content and products that users view most frequently, and the effectiveness of our third party advertising.
                <br />
                Advertising Cookies assist in delivering ads to relevant audiences and having our ads appear at the top of search results.
                <br />
                Cookies are either session Cookies which are deleted when you end your browser session, or persistent,which remain until their deletion by you or the party who served the cookie. 
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            How to disable Cookies.
            </h3>
            <p>
                <p className="mb-1">
                You can generally activate or later deactivate the use of cookies through a functionality built into your web browser. To learn more about how to control cookie settings through your browser:
                </p>
                <p className="mb-1">
                <a className="underline text-blue-400" href="https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history">
                Click here to learn more about the Private Browsing setting managing cookie settings in Firefox;
                </a><br />
                <a className="underline text-blue-400" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">
                Click here to learn more about managing cookie settings in Firefox
                </a>
                </p>
                <p className="mb-1">
                <a className="underline text-blue-400" href="https://support.google.com/chrome/answer/95647">
                Click here to learn more about managing cookie settings in Chrome;
                </a>
                </p>
                <p className="mb-1">
                <a className="underline text-blue-400" href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                Click here to learn more about InPrivateand managing cookie settings in Internet Explorer; or
                </a>
                <br />
                <a className="underline text-blue-400" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjIv7fZj9H5AhWAVfEDHaPtB6oQFnoECA4QAw&url=https%3A%2F%2Fsupport.apple.com%2Fen-ng%2Fguide%2Fsafari%2Fsfri11471%2Fmac&usg=AOvVaw0DRMY0alu8mmaRRIqi8Ms9">
                Click here to learn more about Private Browsingand managing cookie settings in Safari.
                </a>
                </p>
                <p className="mb-1">
                If you want to learn more about cookies, or how to control, disable or delete them, please visit 
                &nbsp;<a className="underline text-blue-400" href="http://www.aboutcookies.org"><strong>http://www.aboutcookies.org</strong></a> for detailed guidance. In addition, certain third party advertising networks, including Google, permit users to opt out of or customize preferences associated with your internet browsing. 
                </p>
                <p className="mb-1">
                To control flash cookies, which we may use on our Platform from time to time, you can go to this link because Flash cookies cannot be controlled through your browser settings. Please note that if you decline the use of Cookies, some functions of the website may be unavailable and we will not be able to present personally tailored content and advertisements to you.
                <br />
                We may link the information collected by Cookies with other information we collect from you pursuant to this Privacy Policy and use the combined information as set forth herein. Similarly, the third parties who serve cookies on our Site may link your name or email address to other information they collect, which may include past purchases made offline or online, or your online usage information. 
                </p>
            </p>
        </div>
        <div className="mt-3">
            <h3 className="font-bold text-xl">
            Cookies Disclosure
            </h3>
            <h2 className="font-semibold text-lg">
            Name of Cookie/Identifier
            </h2>
            <ul>
                <li><a className="underline text-blue-400" href="https://analytics.google.com"><strong>Google analytics</strong></a></li>
                <li><a className="underline text-blue-400" href="https://firebase.google.com/docs/analytics"><strong>Firebase analytics</strong></a></li>
                <li><a className="underline text-blue-400" href="https://www.cloudflare.com"><strong>Cloudflare CDN</strong></a></li>
                <li><strong>Newsletter_popup</strong></li>
                <li><strong>App_popup</strong></li>
            </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default Policy;