import { LivenessCheckService, PromiseErrorOr } from 'backk';

export default class LivenessCheckServiceImpl extends LivenessCheckService {
    isMicroserviceAlive(): PromiseErrorOr<null> {
        return Promise.resolve([null, null]);
    }
}
