import { CaptchaVerifyService } from 'backk';

export default class CaptchaVerifyServiceImpl extends CaptchaVerifyService {
  verifyCaptcha(): Promise<boolean> {
    // Verify captcha with API call to your Captcha provider e.g. using makeHttpRequest
    return Promise.resolve(true);
  }
}
