import type { CredentialSet } from '../authentication/Credentials';
import type { Permissions, PermissionSet } from '../ldp/permissions/Permissions';
import type { ResourceIdentifier } from '../ldp/representation/ResourceIdentifier';
import { AsyncHandler } from '../util/handlers/AsyncHandler';

export interface AuthorizerInput {
  /**
   * Credentials of the entity that wants to use the resource.
   */
  credentials: CredentialSet;
  /**
   * Identifier of the resource that will be read/modified.
   */
  identifier: ResourceIdentifier;
  /**
   * Permissions that are requested on the resource.
   */
  permissions: Permissions;
  /**
   * Permissions that are available for the request.
   */
  permissionSet: PermissionSet;
}

/**
 * Verifies if the given credentials have access to the given permissions on the given resource.
 * An {@link Error} with the necessary explanation will be thrown when permissions are not granted.
 */
export abstract class Authorizer extends AsyncHandler<AuthorizerInput> {}
