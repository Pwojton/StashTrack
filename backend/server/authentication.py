from typing import Optional, Tuple

from rest_framework.request import Request
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.authentication import JWTAuthentication, AuthUser
from rest_framework_simplejwt.tokens import Token
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError


class CookiesJWTAuthentication(JWTAuthentication):
    """
    Custom authentication class that retrieves the JWT access token from cookies

    This class extends JWTAuthentication class
    """
    def authenticate(self, request: Request) -> Optional[Tuple[AuthUser, Token]]:
        """
        This method extracts the 'access_token' from the request's cookies, validates it,
        and retrieves the associated user. If authentication fails, it returns None.

        :param request: The HTTP request object containing cookies
        :return:A tuple containing the authenticated user and the validated token if successful, otherwise None.
        """
        access_token: Optional[str] = request.COOKIES.get('access_token')

        if not access_token:
            return None

        try:
            validated_token: Token = self.get_validated_token(access_token.encode('utf-8'))
            user: AuthUser = self.get_user(validated_token)
        except (InvalidToken, TokenError, AuthenticationFailed) as e:
            print(f"Authentication error: {e}")
            return None

        return user, validated_token
