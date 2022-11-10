<?php

namespace App\Binance;

use Binance\API;
use Illuminate\Support\Collection;

class FuturesClient extends API
{
    public function account()
    {
        return $this->httpRequest(
            'fapi/v2/account',
            'GET',
            [
                'fapi' => true
            ],
            true
        );
    }

    public function balance()
    {
        return $this->httpRequest(
            'fapi/v2/balance',
            'GET',
            [
                'fapi' => true
            ],
            true
        );
    }

    public function userTrades()
    {
        return $this->httpRequest(
            'fapi/v1/userTrades',
            'GET',
            [
                'fapi' => true,
                'symbol' => 'BNBBUSD',
            ],
            true
        );
    }

    public function positions(): Collection
    {
        return collect($this->httpRequest(
            'fapi/v2/positionRisk',
            'GET',
            [
                'fapi' => true,
                'symbol' => 'BNBBUSD'
            ],
            true
        ));
    }

    public function openLong(float $size, float $entry): array
    {
        return $this->httpRequest(
            'fapi/v1/order',
            'POST',
            [
                'fapi' => true,
                'symbol' => 'BNBBUSD',
                'side' => 'BUY',
                'quantity' => $size,
                'type' => 'LIMIT',
                'price' => $entry,
                'timeInForce' => 'GTC',
                'positionSide' => 'LONG'
            ],
            true
        );
    }
}