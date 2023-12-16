import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';

class OutStandingDoctor extends Component {

    componentDidMount() {
        this.props.loadTopDoctors();
    }

    render() {
        return (
            <div className='section-share section-outstangding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-boder'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstangding-doctor'></div>
                                        <div className='position text-center'>
                                            <div>Giáo sư tiến sĩ Lê Tuấn Đan</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
