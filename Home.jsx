const Home = () => {

    return (
        <div>Home</div>
        
    )
    
<ResultsTitle Home={Home}>
   
    {resultsData &&
        resultsData.map((result, index) => (
            <JobTitle
                key={`result-title-${index}-${result.title}`}
                theme={theme}
            >
                {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>

    ))}
    
</ResultsTitle>
}

import Footer from './'
import { render } from '@testing-library/react'
 
describe('Footer', () => {
    test('Should render without crash', async () => {
        render(<Footer />;)
    })
})

test('Change theme', async () => {
    render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
})
export default Home