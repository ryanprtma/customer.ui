import Head from 'next/head';
import CustomerSummaryChart from '../components/CustomerSummaryChart';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Head>
                <title>Customer Dashboard</title>
            </Head>
            <main className="max-w-4xl mx-auto">
                <CustomerSummaryChart />
            </main>
        </div>
    );
}
