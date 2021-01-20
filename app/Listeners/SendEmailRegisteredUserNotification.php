<?php

namespace App\Listeners;

use App\Events\RegisteredUser;
use App\Models\User;
use App\Notifications\RegisteredUserNotification;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendEmailRegisteredUserNotification implements ShouldQueue
{
    public function __construct()
    {
        //
    }

    public function handle(Registered $event)
    {
        $user = $event->user;
        $this->sendNotificationToAdmin($user);
    }

    private function sendNotificationToAdmin($user)
    {
        $users = User::where('is_admin', true)->get();
        Notification::send($users, new RegisteredUserNotification($user));
    }
}
