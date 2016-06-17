<?php

use Illuminate\Contracts\Events\Dispatcher;
use Sijad\Google\Analytics\Listener;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
};
