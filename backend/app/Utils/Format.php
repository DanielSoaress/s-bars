<?php

namespace App\Utils;

use Illuminate\Support\Str;

class Format
{
    static function date_br_to_date($date): ?string
    {
        return $date ? implode('-', array_reverse(explode('/', $date))) : '';
    }

    static function date_to_date_br($date): ?string
    {
        return $date ? implode('/', array_reverse(explode('-', $date))) : '';
    }

    static function date_br_to_datetime_now($date): ?string
    {
        return $date ? implode('-', array_reverse(explode('/', $date))) . ' ' . now()->toTimeString() : '';
    }

    static function date_br_to_datetime_zero($date): ?string
    {
        return $date ? implode('-', array_reverse(explode('/', $date))) . ' 00:00:00' : '';
    }

    static function date_br_to_datetime_day($date): ?string
    {
        return $date ? implode('-', array_reverse(explode('/', $date))) . ' 23:59:59' : '';
    }

    static function datetime_to_date($date): ?string
    {
        return $date ? Str::limit($date, 10, '') : '';
    }

    static function datetime_to_date_br($date): ?string
    {
        return $date ? implode('/', array_reverse(explode('-', Str::limit($date, 10, '')))) : '';
    }

    static function datetime_to_datetime_br($date): ?string
    {
        return $date ? implode('/', array_reverse(explode('-', Str::limit($date, 10, '')))). ' às ' . date("H:m", strtotime($date)) : '';
    }

    static function to_usd($value)
    {
        if ($value) {
            $format = $value;
            $format = str_replace('R$ ', '', $format);
            $format = str_replace('.', '', $format);
            return str_replace(',', '.', $format);
        }

        return '0.00';
    }

    static function to_real($value): string
    {
        if ($value) {
            return number_format($value, 2, ',', '.');
        }

        return '0,00';
    }

    static function to_real_prefix($value): string
    {
        if ($value) {
            return 'R$ ' . number_format($value, 2, ',', '.');
        }

        return 'R$ 0,00';
    }

    static function comma($value)
    {
        return str_replace('.', ',', $value);
    }
}
