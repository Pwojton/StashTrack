from typing import Any

from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    Custom view for obtaining JWT authentication tokens.
    This view extends `TokenObtainPairView` to handle JWT authentication,
    returning access and refresh tokens as HttpOnly cookies upon successful login.

    Methods:
        post(request, *args, **kwargs):
            Authenticates the user and returns tokens as HttpOnly cookies.
    Attributes:
        Inherits all attributes from `TokenObtainPairView`.
    Raises:
        AuthenticationFailed: If authentication fails due to invalid credentials.
    """

    def post(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        """
        Handles user authentication and sets JWT tokens as HttpOnly cookies.

        :param request: The HTTP request containing user credentials.
        :param args: Additional positional arguments passed to the parent class.
        :param kwargs: Additional keyword arguments passed to the parent class.
        :return: A Response object indicating login success and setting cookies.
        :raises AuthenticationFailed: If authentication credentials are invalid.
        """
        try:
            response: Response = super().post(request, *args, **kwargs)
            tokens: dict[str, str] = response.data

            access_token: str = tokens['access']
            refresh_token: str = tokens['refresh']

            res: Response = Response()

            res.data = {'Successful login': True}
            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )
            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            return res
        except AuthenticationFailed:
            return Response(data={'Successful login': False})
