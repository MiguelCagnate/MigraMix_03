
const UrlValidation = (url) => {
    if (!url) return true;
    const urlRegex = /^((https?|ftp|smtp):\/\/)?(www\.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (!urlRegex.test(url)) {
        return "Please enter a valid website URL. The URL must start with http:// or https:// and have at least 3 characters.";
    }
    return true;
};

export default UrlValidation