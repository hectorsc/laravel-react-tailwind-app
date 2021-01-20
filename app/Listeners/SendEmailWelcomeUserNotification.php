<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;

class SendEmailWelcomeUserNotification implements ShouldQueue
{
    public function __construct()
    {
        //
    }

    public function handle($event)
    {
        // Enviamos correo cuando cuando no tenemos la interaz
        // verificación de email
        // si tenemos que verificar primero email y luego enviar
        // correo no se donde se hace ahora mismo :(
        if (! $event->user instanceof MustVerifyEmail) 
        {
            $mail = new WelcomeEmail();
            Mail::to($event->user->email)->send($mail);
        }  
    }
}
