import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '2rem auto',
        padding: '0 1rem',
        lineHeight: 1.6
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Privacy Policy</h1>
        <p>
          This application does not collect, store, or transmit any personal user data.
          We respect your privacy and do not use tracking, analytics, or any form of data collection.
        </p>
        <p>
          If you have any questions about this policy, please contact us at <a href="mailto:czaikis@o365.uth.com">czaikis@o365.uth.com</a>.
        </p>
        <footer style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666',
          marginTop: '2rem'
        }}>
          &copy; 2025 Chris Zaikis or Fire Guard
        </footer>
      </div>
    </>
  );
}
