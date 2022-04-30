export function alreadyExists(resource: string): string {
  return `${resource}-already-exists`;
}
export function notFound(resource: string): string {
  return `${resource}-not-found`;
}

export function unauthorized(resource: string): string {
  return `${resource}-not-unauthorized`;
}

export const unableToValidateToken = 'unable-to-validate-token';

export const withoutPermission = 'forbidden';

export const mustBeAJwtString = 'token-must-be-a-jwt-string';

export const usernameOrPasswordInvalid = 'username-or-password-invalid';

export const invalidCredentials = 'invalid-credentials';
