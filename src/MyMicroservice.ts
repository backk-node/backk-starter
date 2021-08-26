import { DefaultJwtAuthorizationServiceImpl, StartupCheckServiceImpl, Microservice } from 'backk';
import CaptchaVerifyServiceImpl from './services/captchaverify/CaptchaVerifyServiceImpl';
import ResponseCacheConfigServiceImpl from './services/responsecacheconfig/ResponseCacheConfigServiceImpl';
import AuditLoggingServiceImpl from './services/auditlogging/AuditLoggingServiceImpl';
import { mySqlDataStore } from './datastores/mySqlDataStore';

// TODO: Choose your data store here, you can only use one kind of data store,
//  if you don't need a persistent data store, use NoOpDataStore
const dataStore = mySqlDataStore;
// const dataStore = postgreSqlDataStore;
// const dataStore = mongoDbDataStore;
// const dataStore = new NoOpDataStore();

// noinspection JSUnusedLocalSymbols
export default class MyMicroservice extends Microservice {
  private readonly captchaVerifyService = new CaptchaVerifyServiceImpl();
  private readonly startupCheckService = new StartupCheckServiceImpl(dataStore);
  private readonly responseCacheConfigService = new ResponseCacheConfigServiceImpl();
  private readonly auditLoggingService = new AuditLoggingServiceImpl();

  // TODO: Configure your Authorization service
  private readonly authorizationService = new DefaultJwtAuthorizationServiceImpl(
    process.env.JWT_SIGN_SECRET,
    'userName',
    'roles'
  );

  // TODO: Add your services here
  // For example:
  // private readonly userAccountService = new UserAccountServiceImpl(dataStore);

  constructor() {
    super(dataStore);
  }
}
