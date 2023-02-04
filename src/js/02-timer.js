import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.getElementById("datetime-picker");
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const Btn = document.querySelector('[data-start]');
const countDownDate = new Date();

const now = Date.now();
