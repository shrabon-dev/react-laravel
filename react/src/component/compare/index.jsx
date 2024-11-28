import React from 'react'
import Title from '../title'

export default function Compare() {
  return (
    <>
        <section className='compare__table '>
            <div className="container-fluid">
                <Title title={'Compare our plans and find the right one for you'} info={"StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."}/>

                <div className="table__body">
                <table className='compare__table '>
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            <td>$60/month</td>
                            <td>$120/month</td>
                            <td>$320/month</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>Access to a wide selection of movies and shows, including some new releases.</td>
                            <td>Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
                            <td>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
                        </tr>
                        <tr>
                            <td>Devices</td>
                            <td>Watch on one device simultaneously</td>
                            <td>Watch on Two device simultaneously</td>
                            <td>Watch on Four device simultaneously</td>
                        </tr>
                        <tr>
                            <td>Free Trail</td>
                            <td>7 Days</td>
                            <td>7 Days</td>
                            <td>7 Days</td>
                            
                        </tr>
                        <tr>
                            <td>Cancel Anytime</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>HDR</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td> 
                        </tr>
                        <tr>
                            <td>Dolby Atmos</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            
                        </tr>
                        <tr>
                            <td>Ad - Free</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Offline Viewing</td>
                            <td>No</td>
                            <td>Yes, for select titles.</td>
                            <td>Yes, for all titles.</td>
                        </tr>
                        <tr>
                            <td>Family Sharing</td>
                            <td>No</td>
                            <td>Yes, up to 5 family members.</td>
                            <td>Yes, up to 6 family members.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    </>
  )
}
