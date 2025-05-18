export default async function handler(req, res) {
    try {
        const response = await fetch('http://localhost:8000/api/customers/summary');

        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API lokal');
        }

        const json = await response.json();

        const chartData = json.data.summaries.map(item => ({
            name: item.gender,
            customers: item.total,
        }));

        res.status(200).json(chartData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal fetch customer summary dari localhost' });
    }
}
