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
                                    <div className='col-xl-4 col-lg'>
                                        <div className='px-2 mb-5 pb-3'>
                                            <CardInfo title="요금액"
                                                icon="coins"
                                                color="primary"
                                                value="W 10,000" />
                                        </div>
                                        
                                        <div className='px-2'>
                                            <CardInfo title="전력량"
                                                icon="bolt"
                                                color="primary"
                                                value="100 Kw" />
                                        </div>
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
