/**
 * Created by dantaedavies on 7/20/19.
 */
({
    onInit: function(cmp, evt, hpr) {
            var mapList = [
                            {
                                'ActivityName': 'Sunnyvale',
                                'BBCProjectName': 'Sunnyvale Coaching + Support'
                            },
                            {
                                'ActivityName': 'FBC',
                                'BBCProjectName': 'Foundation for Blind Children - Implementation'
                            }
                           ];

            cmp.set("v.activityMappings", mapList);
        }
})