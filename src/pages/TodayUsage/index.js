import React, {Component} from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

import ChartToday from '../../components/Charts/Today';
import CardInfo from '../../components/Cards/Info';

class TodayUsage extends Component {
    render() {
        return (
            <div>
                {/* <!-- Page Wrapper --> */}
                <div id="wrapper" >

                    {/* <!-- Sidebar --> */}
                    < Sidebar />
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}

                                <PageHeading title="전력 조회" />

                                {/* <!-- Content Row --> */}
                                
                                <div className="row">
                                    <div className='col-xl-4 col-lg align-self-center'>
                                        <CardInfo title=""
                                            icon="coins"
                                            color="primary"
                                            value="W 10,000"/>
                                        
                                        <CardInfo title=""
                                            icon="bolt"
                                            color="primary"
                                            value="100 Kw" />
                                    </div>
                                    <div className="col-xl-8 col-lg">
                                        <ChartToday />
                                    </div>
                                </div>

                            </div>
                            {/* <!-- /.container-fluid --> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default TodayUsage;
