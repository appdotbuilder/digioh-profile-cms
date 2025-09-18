<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #5B82C3;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field label {
            font-weight: bold;
            color: #12234F;
            display: block;
            margin-bottom: 5px;
        }
        .field value {
            display: block;
            padding: 10px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .message-text {
            white-space: pre-line;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Contact Message</h1>
        <p>digiOH Website Contact Form</p>
    </div>
    
    <div class="content">
        <div class="field">
            <label>Name:</label>
            <div class="value">{{ $message->name }}</div>
        </div>
        
        <div class="field">
            <label>Email:</label>
            <div class="value">{{ $message->email }}</div>
        </div>
        
        <div class="field">
            <label>Message:</label>
            <div class="value message-text">{{ $message->message }}</div>
        </div>
        
        <div class="field">
            <label>Submitted:</label>
            <div class="value">{{ $message->created_at->format('F j, Y \a\t g:i A') }}</div>
        </div>
        
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
            This message was submitted through the digiOH website contact form.
        </p>
    </div>
</body>
</html>