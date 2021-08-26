import { ResponseCacheConfigService } from 'backk';

export default class ResponseCacheConfigServiceImpl implements ResponseCacheConfigService {
  getCachingDurationInSecs(): number {
    return 60;
  }

  shouldCacheServiceFunctionCallResponse(serviceFunctionName: string, serviceFunctionArgument: any): boolean {
    return false;
  }
}
