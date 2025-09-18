<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use App\Models\SiteSetting;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index(): Response
    {
        // Get contact information from site settings
        $companyName = SiteSetting::get('company_name', 'digiOH');
        $companyAddress = SiteSetting::get('company_address');
        $companyPhone = SiteSetting::get('company_phone');
        $companyEmail = SiteSetting::get('company_email');
        $companyWhatsapp = SiteSetting::get('company_whatsapp');
        $mapLatitude = SiteSetting::get('map_latitude', '40.7128');
        $mapLongitude = SiteSetting::get('map_longitude', '-74.0060');

        // Get social media links
        $socialLinks = [
            'facebook' => SiteSetting::get('social_facebook'),
            'instagram' => SiteSetting::get('social_instagram'),
            'twitter' => SiteSetting::get('social_twitter'),
            'linkedin' => SiteSetting::get('social_linkedin'),
            'youtube' => SiteSetting::get('social_youtube'),
        ];

        return Inertia::render('contact', [
            'companyName' => $companyName,
            'companyAddress' => $companyAddress,
            'companyPhone' => $companyPhone,
            'companyEmail' => $companyEmail,
            'companyWhatsapp' => $companyWhatsapp,
            'mapLatitude' => (float) $mapLatitude,
            'mapLongitude' => (float) $mapLongitude,
            'socialLinks' => array_filter($socialLinks), // Remove empty values
        ]);
    }

    /**
     * Store a new contact message.
     */
    public function store(StoreContactMessageRequest $request)
    {
        // Create the contact message
        $message = ContactMessage::create($request->validated());

        // Send email notification
        $this->sendContactNotification($message);

        return redirect()->back()->with('success', 'Thank you for your message! We\'ll get back to you soon.');
    }

    /**
     * Send email notification for new contact message.
     *
     * @param ContactMessage $message
     * @return void
     */
    protected function sendContactNotification(ContactMessage $message): void
    {
        $recipient = SiteSetting::get('contact_recipient', config('mail.from.address'));
        $subject = SiteSetting::get('contact_subject', 'New Contact Form Submission');
        $ccEmail = SiteSetting::get('contact_cc');

        try {
            Mail::send('emails.contact-message', compact('message'), function ($mail) use ($recipient, $subject, $ccEmail) {
                $mail->to($recipient)
                     ->subject($subject);
                
                if ($ccEmail) {
                    $mail->cc($ccEmail);
                }
            });
        } catch (\Exception $e) {
            \Log::error('Failed to send contact email: ' . $e->getMessage());
        }
    }
}