import { DefaultJwtAuthorizationServiceImpl, StartupCheckServiceImpl, Microservice, MySqlDataStore } from 'backk';
import CaptchaVerifyServiceImpl from './services/captchaverify/CaptchaVerifyServiceImpl';
import ResponseCacheConfigServiceImpl from './services/responsecacheconfig/ResponseCacheConfigServiceImpl';
import AuditLoggingServiceImpl from './services/auditlogging/AuditLoggingServiceImpl';

// TODO: Choose your data store here, you can only use one kind of data store,
//  if you don't need a persistent data store, use NoOpDataStore
const dataStore = new MySqlDataStore();
// const dataStore = new PostgreSqlDataStore();
// const dataStore = new MongoDbDataStore();
// const dataStore = new NoOpDataStore();

// noinspection JSUnusedLocalSymbols
class MicroserviceImpl extends Microservice {
  private readonly captchaVerifyService = new CaptchaVerifyServiceImpl();
  private readonly startupCheckService = new StartupCheckServiceImpl(dataStore);
  private readonly responseCacheConfigService = new ResponseCacheConfigServiceImpl();
  private readonly auditLoggingService = new AuditLoggingServiceImpl();
  private readonly authorizationService = new DefaultJwtAuthorizationServiceImpl();

  // TODO: Create your service(s) classes under services directory and instantiate them here
  // For example:
  // private readonly userAccountService = new UserAccountServiceImpl(dataStore);

  constructor() {
    super(dataStore);
  }
}

export const microservice = new MicroserviceImpl();
