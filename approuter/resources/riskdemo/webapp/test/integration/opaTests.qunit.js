sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'risk/riskdemo/test/integration/FirstJourney',
		'risk/riskdemo/test/integration/pages/RisksList',
		'risk/riskdemo/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('risk/riskdemo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);