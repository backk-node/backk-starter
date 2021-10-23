import { JwtAuthorizationServiceImpl, Microservice, MySqlDataStore, StartupCheckServiceImpl } from 'backk';
import CaptchaVerificationServiceImpl from './services/captchaverification/CaptchaVerifyServiceImpl';
import ResponseCacheConfigServiceImpl from './services/responsecacheconfig/ResponseCacheConfigServiceImpl';
import AuditLoggingServiceImpl from './services/auditlogging/AuditLoggingServiceImpl';
import LivenessCheckServiceImpl from './services/livenesscheck/LivenessCheckServiceImpl';
import ExampleServiceImpl from './services/example/ExampleServiceImpl';

// TODO: Choose your data store here, you can only use one kind of data store,
//  if you don't need a persistent data store, use NoOpDataStore
const dataStore = new MySqlDataStore();
// const dataStore = new PostgreSqlDataStore();
// const dataStore = new MongoDbDataStore();
// const dataStore = new NoOpDataStore();

// noinspection JSUnusedLocalSymbols
class MicroserviceImpl extends Microservice {
  private readonly auditLoggingService = new AuditLoggingServiceImpl();
  private readonly authorizationService = new JwtAuthorizationServiceImpl();
  private readonly captchaVerificationService = new CaptchaVerificationServiceImpl();
  private readonly livenessCheckService = new LivenessCheckServiceImpl(dataStore);
  private readonly responseCacheConfigService = new ResponseCacheConfigServiceImpl();
  private readonly startupCheckService = new StartupCheckServiceImpl(dataStore);

  // TODO: Create your service(s) classes under services directory and instantiate them here
  private readonly exampleService = new ExampleServiceImpl(dataStore);

  constructor() {
    super(dataStore);
  }
}

const microservice = new MicroserviceImpl();
export default microservice;
