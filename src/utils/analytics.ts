import ReactGA from 'react-ga4';

export const initAnalytics = (): void => {
    ReactGA.initialize('G-XXXXXXXXXX'); // Zamenite sa pravim ID
};

export const trackPageView = (pageTitle: string): void => {
    ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname,
        title: pageTitle
    });
};

export const trackCVDownload = () => {
    ReactGA.event({
        category: 'Download',
        action: 'CV Download',
        label: 'Portfolio Site'
    });
};