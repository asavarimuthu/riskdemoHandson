using riskmanagement as rm from '../db/schema';
 // Annotate Risk elements
 annotate rm.Risks with {
 ID @title : 'Risk';
 title @title : 'Title';
 owner @title : 'OwnerModified';
 prio @title : 'Priority';
 descr @title : 'Description';
 miti @title : 'Mitigation';
 impact @title : 'Impact';
 //### BEGIN OF INSERT
 bp @title : 'Business Partner';
 //### END OF INSERT
 criticality @title : 'Criticality';
 }
 // Annotate Miti elements
 annotate rm.Mitigations with {
 ID @(
 UI.Hidden,
 Commong : {Text : descr}
 );
 owner @title : 'Owner';
 descr @title : 'Description';
 }