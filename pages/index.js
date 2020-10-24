import data from "./data";
const Index = () => {
    return (
            <div style={{ margin: '0 auto', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                <h1>👋 Hallo, Pengguna PejuangRemote</h1>
                <p>Website ini masih dalam tahap pengembangan, harap bersabar ya 🙏 </p>

                <h2>Daftar Lowongan Pekerjaan</h2>
                {data.map(({ job, company }) => (
                    <div style={{ padding: '16px 0', borderBottom: '1px solid gray', textAlign: 'left' }}>
                        <div style={{ display: 'flex', verticalALign: 'center', alignItems: 'center' }}>
                            <div style={{ width: '52px', padding: '0 8px 0 0'}}>
                                <img src={company.logo} alt={company.name} style={{ width: '100%' }} />
                            </div>
                            <div>
                                <div>{job.title}</div>
                                <div>{company.name}</div>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: job.description}} style={{ textAlign: 'left' }} />
                        <button type="submit" onClick={() => window.location.href = job.url}>Kirim</button>
                    </div>
                ))}
            </div>
    );
}

export default Index;