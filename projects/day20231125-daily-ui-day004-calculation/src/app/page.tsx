/**
 * Currency Converter Component
 *
 * This is a component for a currency converter using Next.js and TailwindCSS.
 * The component will include an input field for the amount, a dropdown to select
 * the currency to convert from, and another dropdown to select the currency to convert to.
 * The conversion rates will be fetched from a currency conversion API.
 *
 * Features:
 * - Input field for entering the amount.
 * - Dropdown for selecting the source currency.
 * - Dropdown for selecting the target currency.
 * - A convert button that triggers the conversion calculation.
 * - Display the converted amount in the target currency.
 *
 * This component uses TailwindCSS for styling and is built with Next.js for server-side rendering.
 * The currency rates are fetched using a simple API call and the calculation is done on the client side.
 *
 * GitHub Copilot can assist in writing the functional logic for fetching conversion rates,
 * handling user input, and performing the currency conversion calculation.
 *
 * Example Usage:
 * <CurrencyConverter />
 */
import CurrencyConverter from "../components/CurrencyConverter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <CurrencyConverter />
    </main>
  );
}
