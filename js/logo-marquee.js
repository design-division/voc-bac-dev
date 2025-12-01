// HTML template for the logo marquee
const LOGO_MARQUEE_HTML = `
  <div class="logo-marquee-wrapper">
    <ul class="logo-marquee-content">
        <li><img class="small-height" src="/s/thredbo-logo.png" alt="Thredbo Logo"></li>
        <li><img src="/s/perisher-logo.svg" alt="Perisher Logo"></li>
        <li><img src="/s/outdoors-member-logo.png" alt="Outdoors NSW & ACT Member"></li>
        <li><img src="/s/parks-eco-pass-logo.png" alt="Parks Eco Pass Logo"></li>
        <li><img class="small-height" src="/s/kha-logo.png" alt="KHA Logo"></li>
        <li><img src="/s/snowy-mountains-logo.png" alt="Snowy Mountains Logo"></li>
        <li><img src="/s/dwa-logo.png" alt="Disabled Wintersports Australia Logo"></li>
        <li><img src="/s/paddle-australia-logo.png" alt="Paddle Australia Logo"></li>
        <li><img class="small-height" src="/s/aiasf-logo.png" alt="Australian Indigenous Alpine Sport Foundation Logo"></li>
    </ul>
  </div>
`;

// Inject marquee HTML into each .logo-marquee placeholder
document.querySelectorAll(".logo-marquee").forEach(wrapper => {
    wrapper.innerHTML = LOGO_MARQUEE_HTML;

    const root = document.documentElement;
    const displayed = getComputedStyle(root).getPropertyValue("--logo-marquee-elements-displayed");
    const content = wrapper.querySelector("ul.logo-marquee-content");

    root.style.setProperty("--logo-marquee-elements", content.children.length);

    // Clone logos for infinite scroll illusion
    for (let i = 0; i < displayed; i++) {
        content.appendChild(content.children[i].cloneNode(true));
    }
});
