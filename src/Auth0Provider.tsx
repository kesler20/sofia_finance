import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

const authConfig = {
  domain: "dev-vdgok26xngs8bggz.us.auth0.com",
  clientID: "ZtjhKuSTQoES0aFfXgao9m6NhcDjQrxJ",
};

export default function Auth0ProviderWithHistory({
  children,
}: {
  children: any;
}): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const onRedirectCallBack = (appState: any) => {
    navigate(appState?.returnTo || location.pathname);
  };

  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientID}
      onRedirectCallback={onRedirectCallBack}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
