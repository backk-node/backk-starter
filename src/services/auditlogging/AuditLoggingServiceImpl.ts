import { AuditLogEntry, AuditLoggingService } from 'backk';

export default class AuditLoggingServiceImpl implements AuditLoggingService {
  log(auditLogEntry: AuditLogEntry): Promise<void> {
    // send audit log entry here to a remote audit log server using e.g. callRemoteService or sendToRemoteService
    return Promise.resolve();
  }
}
