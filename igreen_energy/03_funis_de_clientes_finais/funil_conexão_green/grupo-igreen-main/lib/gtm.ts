// GTM Event Tracking Utilities

// Event type
export type GTMEvent = {
    event: string;
    [key: string]: unknown;
};

// Push event to dataLayer
export const pushGTMEvent = (event: GTMEvent): void => {
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push(event);
    }
};

// Pre-defined events for consistent tracking
export const gtmEvents = {
    // CTA button clicks
    ctaClick: (buttonName: string, location: string) =>
        pushGTMEvent({
            event: 'cta_click',
            button_name: buttonName,
            button_location: location,
        }),

    // Simulator interaction started
    simulatorStart: (billValue: number) =>
        pushGTMEvent({
            event: 'simulator_start',
            bill_value: billValue,
        }),

    // Simulator completed with results
    simulatorComplete: (billValue: number, savings: number) =>
        pushGTMEvent({
            event: 'simulator_complete',
            bill_value: billValue,
            monthly_savings: savings,
            annual_savings: savings * 12,
        }),

    // WhatsApp redirect clicks
    whatsappClick: (context: string, billValue?: number) =>
        pushGTMEvent({
            event: 'whatsapp_click',
            context: context,
            bill_value: billValue,
            // Meta Ads mapping: Lead
            event_type: 'lead',
        }),

    // General Contact event
    contact: (method: string, context: string) =>
        pushGTMEvent({
            event: 'contact',
            method: method,
            context: context,
            // Meta Ads mapping: Contact
            event_type: 'contact',
        }),

    // Section navigation
    scrollToSection: (sectionId: string) =>
        pushGTMEvent({
            event: 'section_navigation',
            section_id: sectionId,
        }),
};
