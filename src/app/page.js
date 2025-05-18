import Head from 'next/head';
import CustomerSummaryChart from './components/CustomerSummaryChart';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Customer Data Dashboard</h1>

                <CustomerSummaryChart
                    apiUrl="https://customerapi-production-62ad.up.railway.app/api/customers/summary/gender"
                    chartTitle="Customer Summary by Gender"
                />

                <CustomerSummaryChart
                    apiUrl="https://customerapi-production-62ad.up.railway.app/api/customers/summary/age"
                    chartTitle="Customer Summary by Age Group"
                />

                <CustomerSummaryChart
                    apiUrl="https://customerapi-production-62ad.up.railway.app/api/customers/summary/brand-device"
                    chartTitle="Customer Summary by Brand Device"
                />

                <CustomerSummaryChart
                    apiUrl="https://customerapi-production-62ad.up.railway.app/api/customers/summary/digital-interest"
                    chartTitle="Customer Summary by Brand Device"
                />
            </div>
        </div>
    );
}
