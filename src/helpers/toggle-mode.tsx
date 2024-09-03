export const toggleMode = () => {
    const isTestnetEnabled = localStorage.getItem('testnetsEnabled') === 'true';
    const toggledTestnet = isTestnetEnabled ? "false" : "true";
    localStorage.setItem('testnetsEnabled', toggledTestnet);

    // Set window.location to trigger a page reload when navigating to the the dashboard
    window.location.href = '/';

    return toggledTestnet;
};